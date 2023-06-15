import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { title: 'Publicación 1', author: 'Autor 1', date: '2022-01-01', content: 'Contenido de la publicación 1' },
    { title: 'Publicación 2', author: 'Autor 2', date: '2022-02-01', content: 'Contenido de la publicación 2' },
    { title: 'Publicación 3', author: 'Autor 3', date: '2022-03-01', content: 'Contenido de la publicación 3' }
    // Agrega más objetos de publicaciones según tus necesidades
  ];

  constructor(private router: Router) {}

  showDetails(post: any) {
    this.router.navigate(['/post-details', post.title]);
  }
}
