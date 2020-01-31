import { Component, OnInit } from '@angular/core';

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

  constructor() {
      this.alphabet = [
        { letter: 'Α α', pronunciation: 'Άλφα', example: 'Αλβανία', transcription: '[a]' },
        { letter: 'Β β', pronunciation: 'Βήτα', example: 'Βουλγαρία', transcription: '[v]' },
        { letter: 'Γ γ', pronunciation: 'Γάμα', example: 'Γερμανία', transcription: '[γ]' },
        { letter: 'Δ δ', pronunciation: 'Δέλτα', example: 'Δανία', transcription: '[ð]' },
        { letter: 'Ε ε', pronunciation: 'Έψιλον', example: 'Ελλάδα', transcription: '[e]' },
        { letter: 'Ζ ζ', pronunciation: 'Ζήτα', example: 'Ζάμπια', transcription: '[z]' },
        { letter: 'Η η', pronunciation: 'Ήτα', example: 'Ηνωμένες Πολιτίες Αμερικής', transcription: '[i]' },
        { letter: 'Θ θ', pronunciation: 'Θήτα', example: 'Θεσσαλονίκη', transcription: '[θ]' },
        { letter: 'Ι ι', pronunciation: 'Γιώτα', example: 'Ιαπωνία', transcription: '[i]' },
        { letter: 'Κ κ', pronunciation: 'Κάπα', example: 'Καναδάς', transcription: '[k]' },
        { letter: 'Λ λ', pronunciation: 'Λάμδα', example: 'Λίβανος', transcription: '[l]' },
        { letter: 'Μ μ', pronunciation: 'Μι', example: 'Μεξικό', transcription: '[m]' },
        { letter: 'Ν ν', pronunciation: 'Νι', example: 'Νορβηγία', transcription: '[n]' },
        { letter: 'Ξ ξ', pronunciation: 'Ξι', example: 'Ξάνθη', transcription: '[ks]' },
        { letter: 'Ο ο', pronunciation: 'Όμικρον', example: 'Ομάν', transcription: '[o]' },
        { letter: 'Π π', pronunciation: 'Πι', example: 'Πορτογαλία', transcription: '[p]' },
        { letter: 'Ρ ρ', pronunciation: 'Ρω', example: 'Ρουμανία', transcription: '[r]' },
        { letter: 'Σ σ ς *', pronunciation: 'Σίγμα', example: 'Συρία', transcription: '[s]' },
        { letter: 'Τ τ', pronunciation: 'Ταυ', example: 'Τουρκία', transcription: '[t]' },
        { letter: 'Υ υ', pronunciation: 'Ύψιλον', example: 'Υεμένη', transcription: '[i]' },
        { letter: 'Φ φ', pronunciation: 'Φι', example: 'Φινλανδία', transcription: '[f]' },
        { letter: 'Χ χ', pronunciation: 'Χι', example: 'Χιλή', transcription: '[h]' },
        { letter: 'Ψ ψ', pronunciation: 'Ψι', example: 'Ψυχολογία', transcription: '[ps]' },
        { letter: 'Ω ω', pronunciation: 'Ωμέγα', example: 'Ωκεανός', transcription: '[o]' }
      ];

      this.vocabulary = [
        { word: 'γράμμα', translation: 'буква' },
        { word: 'το γράμμα', translation: 'буквата' },
      ];
  }

  ngOnInit() {
  }
}
