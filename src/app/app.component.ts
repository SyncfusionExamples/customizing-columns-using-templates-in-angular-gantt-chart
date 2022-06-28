import { Component, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { projectNewData, editingResources } from '../data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  @ViewChild("ganttObject")
  public ganttObject: GanttComponent | undefined;
  public data: object[] = projectNewData;
  public resources: object[] = editingResources;
  public resourceFields: object = {
    id: "resourceId",
    name: "resourceName"
  }
  public toolbarOptions: any = ["ExpandAll", "CollapseAll", {text: "Quick Filter", id: "filter"},
    {text: "Clear Filter", id:"clearfilter"}]
  public taskSettings: object = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predecessor",
    resourceInfo: "resources"
  }
  public toolbarBtnClicked(args:any):void{
    if(args.item.text === 'Quick Filter'){
      (this.ganttObject as GanttComponent).filterByColumn('TaskName', 'startswith', 'Market');
    } else if(args.item.text === "Clear Filter"){
      (this.ganttObject as GanttComponent).clearFiltering();
    }
  }
}
