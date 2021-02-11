import { Component, OnInit } from '@angular/core';
import { IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faInstagram, 
  faGoogle, 
  faYoutube} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'footer-core',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebook: IconDefinition = faFacebookF;
  faInstagram: IconDefinition = faInstagram;
  faGoogle: IconDefinition = faGoogle;
  faYoutube: IconDefinition = faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

}
