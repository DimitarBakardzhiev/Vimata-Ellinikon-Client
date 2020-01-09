import { Component, OnInit } from '@angular/core';
import { TopicServiceService } from '../../../../services/topic-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {

  topic: { title: string, image: File } = { title: '', image: null };

  constructor(private topicService: TopicServiceService, private router: Router) { }

  ngOnInit() {
  }

  createTopic() {
    let formData = new FormData();
    formData.append('title', this.topic.title);
    formData.append('image', this.topic.image);

    this.topicService.createTopic(formData).subscribe(data => this.router.navigate(['/']), err => console.error(err));
  }

  onFileChanged(event: any) {
    this.topic.image = event.target.files[0];
  }
}
