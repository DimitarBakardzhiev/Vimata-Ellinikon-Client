import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';

declare var responsiveVoice: any;
@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {

  alphabet: { letter: string, pronunciation: string, example: string, transcription: string }[] = [];
  voice: string = 'Female';
  vocabulary: { word: string, translation: string }[] = [];
  title: string = 'Азбука';

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, '/азбука')];

  constructor(private titleService: Title) {
      this.alphabet = [
        { letter: 'Α α', pronunciation: 'Άλφα', example: 'Αλβανία', transcription: '[а]' },
        { letter: 'Β β', pronunciation: 'Βήτα', example: 'Βουλγαρία', transcription: '[в]' },
        { letter: 'Γ γ', pronunciation: 'Γάμα', example: 'Γερμανία', transcription: '[γ]' },
        { letter: 'Δ δ', pronunciation: 'Δέλτα', example: 'Δανία', transcription: '[ð]' },
        { letter: 'Ε ε', pronunciation: 'Έψιλον', example: 'Ελλάδα', transcription: '[е]' },
        { letter: 'Ζ ζ', pronunciation: 'Ζήτα', example: 'Ζάμπια', transcription: '[з]' },
        { letter: 'Η η', pronunciation: 'Ήτα', example: 'Ηνωμένες Πολιτίες Αμερικής', transcription: '[и]' },
        { letter: 'Θ θ', pronunciation: 'Θήτα', example: 'Θεσσαλονίκη', transcription: '[θ]' },
        { letter: 'Ι ι', pronunciation: 'Γιώτα', example: 'Ιαπωνία', transcription: '[и]' },
        { letter: 'Κ κ', pronunciation: 'Κάπα', example: 'Καναδάς', transcription: '[к]' },
        { letter: 'Λ λ', pronunciation: 'Λάμδα', example: 'Λίβανος', transcription: '[л]' },
        { letter: 'Μ μ', pronunciation: 'Μι', example: 'Μεξικό', transcription: '[м]' },
        { letter: 'Ν ν', pronunciation: 'Νι', example: 'Νορβηγία', transcription: '[н]' },
        { letter: 'Ξ ξ', pronunciation: 'Ξι', example: 'Ξάνθη', transcription: '[кс]' },
        { letter: 'Ο ο', pronunciation: 'Όμικρον', example: 'Ομάν', transcription: '[о]' },
        { letter: 'Π π', pronunciation: 'Πι', example: 'Πορτογαλία', transcription: '[п]' },
        { letter: 'Ρ ρ', pronunciation: 'Ρω', example: 'Ρουμανία', transcription: '[р]' },
        { letter: 'Σ σ ς *', pronunciation: 'Σίγμα', example: 'Συρία', transcription: '[с]' },
        { letter: 'Τ τ', pronunciation: 'Ταυ', example: 'Τουρκία', transcription: '[т]' },
        { letter: 'Υ υ', pronunciation: 'Ύψιλον', example: 'Υεμένη', transcription: '[и]' },
        { letter: 'Φ φ', pronunciation: 'Φι', example: 'Φινλανδία', transcription: '[ф]' },
        { letter: 'Χ χ', pronunciation: 'Χι', example: 'Χιλή', transcription: '[х]' },
        { letter: 'Ψ ψ', pronunciation: 'Ψι', example: 'Ψυχολογία', transcription: '[пс]' },
        { letter: 'Ω ω', pronunciation: 'Ωμέγα', example: 'Ωκεανός', transcription: '[о]' }
      ];

      this.vocabulary = [
        { word: 'γράμμα', translation: 'буква' },
        { word: 'το γράμμα', translation: 'буквата' },
      ];

      this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }
}
