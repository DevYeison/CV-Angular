import { Component, OnInit } from '@angular/core';
import { 
  faFacebookF, 
  faInstagram, 
  faGoogle, 
  faYoutube,
  IconDefinition,
  faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'project-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebook: IconDefinition = faFacebookF;
  faInstagram: IconDefinition = faInstagram;
  faGoogle: IconDefinition = faGoogle;
  faYoutube: IconDefinition = faYoutube;
  faGithub: IconDefinition = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
