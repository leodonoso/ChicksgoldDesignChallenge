import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageExporterService {
  sponsorLogos: any = [
    {name: 'visa', url: '../../assets/logos/Visa_Inc._logo.png'},
    {name: 'mastercard', url: '../../assets/logos/Mastercard-logo.png'},
    {name: 'american-express', url: '../../assets/logos/american-express.png'},
    {name: 'skrill', url: '../../assets/logos/Skrill_logo.png'},
    {name: 'bitcoin-green', url: '../../assets/logos/Bitcoin-green.png'},
    {name: 'ethereum', url: '../../assets/logos/Ethereum-Logo.png'},
    {name: 'bitcoin', url: '../../assets/logos/Bitcoin.png'},
    {name: 'litecoin', url: '../../assets/logos/litecoin.png'},
  ]

  socialLogos: any = [
    {name: 'facebook', url: '../../assets/logos/facebook.png', style: 'background-color: #1c58c7;'},
    {name: 'instagram', url: '../../assets/logos/instagram.png', style: 'background: rgb(255,193,105);background: linear-gradient(45deg, rgba(255,193,105,1) 0%, rgba(217,106,106,1) 35%, rgba(186,49,110,1) 100%);'},
    {name: 'twitter', url: '../../assets/logos/twitter.png', style: 'background-color: #62c1f0;'},
    {name: 'discord', url: '../../assets/logos/discord.png', style: 'background-color: #612ed9;'},
  ]

  homeProps: any = [
    {name: 'icon1', url: '../../assets/logos/icon1.png'},
    {name: 'icon2', url: '../../assets/logos/icon2.png'},
    {name: 'icon3', url: '../../assets/logos/icon3.png'},
  ]

  constructor() { }
}
