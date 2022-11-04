import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ExerciseModel } from 'src/app/shared/models/exercise.model';
import { GET_EXERCISES } from './exercises.queries';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private _apollo: Apollo) { }

  public getExercises() : Observable<ApolloQueryResult<ExerciseModel | any>> {
    return this._apollo.watchQuery({
      query: GET_EXERCISES
    }).valueChanges;
  }
}
