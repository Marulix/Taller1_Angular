import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getCourses().subscribe(series => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }


  getAvgSeasons(): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    this.series.forEach((serie) =>
    {
    totalSeasons = totalSeasons + serie.seasons;
    totalSeries = totalSeries + 1;
    });
    let avgSeasons: number = totalSeasons/totalSeries;
    return avgSeasons;
  }

}
