import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from 'src/app/shared/models/exercise.model';
import { ExercisesService } from 'src/app/shared/services/graphql/exercises/exercises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public exercises: ExerciseModel[] = [];

  constructor(private _exerciseService: ExercisesService) { }

  ngOnInit(): void {
    this._exerciseService.getExercises().subscribe(({ data, error }: any) => {
      console.log(data);
      this.exercises = data.exercises;
      console.log(error);
    });
  }

}
