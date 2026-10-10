import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: "root"})
export class TasksService {
    private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Domine o React',
      summary:
        'Aprenda todos os recursos básicos e avançados do React e como aplicá-los.',
      dueDate: '2026-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Construir o primeiro protótipo',
      summary: 'Crie um primeiro protótipo do site da loja online.',
      dueDate: '2026-10-22',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Preparar modelo de issue',
      summary:
        'Prepare e descreva um modelo de issue que auxilie na gestão do projeto.',
      dueDate: '2026-11-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
        this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}