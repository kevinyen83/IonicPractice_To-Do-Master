import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
    newTaskObj = {}
    taskName!: string
    taskPriority!: string
    taskCategory!: string

    taskObj = {}

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

 async closePage(){
    await this.modalCtrl.dismiss(this.taskObj)
 }

addTask(){
this.taskObj = ({itemName:this.taskName,
                itemPriority:this.taskPriority,
                itemCategory:this.taskCategory})

this.closePage()
}
}