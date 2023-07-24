import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageExporterService {
  sponsorLogos: any = [
    {name: 'visa', url: '../../assets/logos/Visa_Inc._logo.png', phone: true, tablet: true},
    {name: 'mastercard', url: '../../assets/logos/Mastercard-logo.png', phone: true, tablet: true},
    {name: 'american-express', url: '../../assets/logos/american-express.png', phone: false, tablet: true},
    {name: 'skrill', url: '../../assets/logos/Skrill_logo.png', phone: false, tablet: true},
    {name: 'bitcoin-green', url: '../../assets/logos/Bitcoin-green.png', phone: false, tablet: false},
    {name: 'ethereum', url: '../../assets/logos/Ethereum-Logo.png', phone: false, tablet: false},
    {name: 'bitcoin', url: '../../assets/logos/Bitcoin.png', phone: false, tablet: false},
    {name: 'litecoin', url: '../../assets/logos/litecoin.png', phone: false, tablet: false},
  ]

  socialLogos: any = [
    {name: 'facebook', url: '../../assets/logos/facebook.png', style: 'background-color: #1c58c7;'},
    {name: 'instagram', url: '../../assets/logos/instagram.png', style: 'background: rgb(255,193,105);background: linear-gradient(45deg, rgba(255,193,105,1) 0%, rgba(217,106,106,1) 35%, rgba(186,49,110,1) 100%);'},
    {name: 'twitter', url: '../../assets/logos/twitter.png', style: 'background-color: #62c1f0;'},
    {name: 'discord', url: '../../assets/logos/discord.png', style: 'background-color: #612ed9;'},
  ]

  homeProps: any = [
    {name: 'icon1', url: '../../assets/logos/icon1.jpg'},
    {name: 'icon2', url: '../../assets/logos/icon2.jpg'},
    {name: 'icon3', url: '../../assets/logos/icon3.jpg'},
    {name: 'icon1', url: '../../assets/logos/icon1.jpg'},
    {name: 'icon2', url: '../../assets/logos/icon2.jpg'},
    {name: 'icon3', url: '../../assets/logos/icon3.jpg'},
    {name: 'icon1', url: '../../assets/logos/icon1.jpg'},
    {name: 'icon2', url: '../../assets/logos/icon2.jpg'},
    {name: 'icon3', url: '../../assets/logos/icon3.jpg'},
    {name: 'icon1', url: '../../assets/logos/icon1.jpg'},
    {name: 'icon2', url: '../../assets/logos/icon2.jpg'},
    {name: 'icon3', url: '../../assets/logos/icon3.jpg'},
    {name: 'icon1', url: '../../assets/logos/icon1.jpg'},
    {name: 'icon2', url: '../../assets/logos/icon2.jpg'},
    {name: 'icon3', url: '../../assets/logos/icon3.jpg'},
  ]

  homePages: any = [
    {text: '1', active: true},
    {text: '2', active: false},
    {text: '3', active: false},
    {text: '4', active: false},
    {text: '...', active: false},
    {text: '11', active: false},
  ]

  constructor() { }
}
