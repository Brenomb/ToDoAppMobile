import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonInput,
  IonButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [taskSegment, setTaskSegment] = useState<"active" | "completed">(
    "active"
  );

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const toggleTask = (task: string, index: number) => {
    if (taskSegment === "active") {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
      setCompletedTasks([...completedTasks, task]);
    } else {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks.splice(index, 1);
      setCompletedTasks(updatedCompletedTasks);
      setTasks([...tasks, task]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-Do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          placeholder="Search tasks..."
          autocapitalize={""}
        />
        <IonSegment
          value={taskSegment}
          onIonChange={(e) =>
            setTaskSegment(e.detail.value as "active" | "completed")
          }
        >
          <IonSegmentButton value="active">
            <IonLabel>Active</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="completed">
            <IonLabel>Completed</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonList>
          {(taskSegment === "active" ? tasks : completedTasks)
            .filter((task) =>
              task.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((task, index) => (
              <IonItem key={index}>
                <IonCheckbox
                  slot="start"
                  checked={taskSegment === "completed"}
                  onIonChange={() => toggleTask(task, index)}
                />
                <IonLabel>{task}</IonLabel>
              </IonItem>
            ))}
        </IonList>
        <IonItem>
          <IonInput
            value={newTask}
            placeholder="Enter new task"
            onIonChange={(e) => setNewTask(e.detail.value!)}
          />
          <IonButton slot="end" onClick={addTask}>
            Add
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
