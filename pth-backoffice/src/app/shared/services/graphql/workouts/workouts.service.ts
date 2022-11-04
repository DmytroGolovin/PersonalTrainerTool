import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { WorkoutModel } from 'src/app/shared/models/workout.model';
import { AuthService } from '../../auth/auth.service';
import { GET_USER_WORKOUTS } from './workouts.queries';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  constructor(private _apollo: Apollo,
    private _authService: AuthService) { }

  public getMyWorkouts() : Observable<ApolloQueryResult<WorkoutModel | any>> {
    const user = this._authService.getCurrentUser();

    return this._apollo.watchQuery({
      query: GET_USER_WORKOUTS,
      variables: {
        clientId: user?.uid,
      },
    }).valueChanges;
  }
}
