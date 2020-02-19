import { Injectable } from '@angular/core';

declare const responsiveVoice: any;

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor() { }

  speak(text: string, voice: string = 'Female') {
    responsiveVoice.speak(text, `Greek ${voice}`, {
      pitch: 1,
      volume: 1,
      rate: 1
    });
  }
}
