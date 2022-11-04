import { Component, OnInit } from '@angular/core';
import { DateHelper } from 'src/app/shared/helpers/date.helper';
import { ExerciseModel } from 'src/app/shared/models/exercise.model';
import { WorkoutModel } from 'src/app/shared/models/workout.model';
import { WorkoutsService } from 'src/app/shared/services/graphql/workouts/workouts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public exercises: ExerciseModel[] = [];
  public todaysWorkout: WorkoutModel | undefined;

  constructor(private _workoutsService: WorkoutsService,
    private _dateHelper: DateHelper) { }

  ngOnInit(): void {
    this._workoutsService.getMyWorkouts().subscribe(({ data, error }: any) => {
      console.log(data);
      // this.exercises = data.exercises;
      console.log(error);
      if(!error && data.workouts.length > 0){
        const currentDate = new Date();
        const currentDayOfTheWeek = this._dateHelper.getDayOfWeekString(currentDate.getDay());

        this.todaysWorkout = data.workouts.find((workout: WorkoutModel) => {
          return workout.weekDay == currentDayOfTheWeek;
        });

        console.log(this.todaysWorkout);
      }
    });
  }

}
