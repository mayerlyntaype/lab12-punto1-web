import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  posts = [
    { title: 'Publicación 1', author: 'Autor 1', date: '2022-01-01', content: 'La “Revista Emergencias”, editada por la Sociedad Española de Medicina de Urgencias y Emergencias (SEMES), es una de las revistas más importantes del mundo sobre la medicina de emergencia y urgencias y una de las revistas más importantes editadas en España sobre esta temática.' },
    { title: 'Publicación 2', author: 'Autor 2', date: '2022-02-01', content: 'Fundada por la Sociedad Española de Nutrición Parenteral y Enteral (SENPE) ,es una de las revistas científicas internacionales con mejor posición en el Journal Citation Report. Se muestran artículos o trabajos sobre la ciencia de la nutrición y de la alimentación, una tema en auge en la sociedad actual.' },
    { title: 'Publicación 3', author: 'Autor 3', date: '2022-03-01', content: 'En esta revista se publican artículos sobre reflexión, crítica e investigación histórica. Pretende difundir todo tipo de investigaciones históricas y de cómo influyen en el panorama actual. Editada por la Fundación Instituto de Historia Social, perteneciente a la UNED, han participado en ella diferentes historiadores como Mary Nash o Julián Casanova, distinguidos historiadores.' }
   
  ];

  post: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const title = params.get('title');
      this.post = this.posts.find(post => post.title === title);
    });
  }
}
