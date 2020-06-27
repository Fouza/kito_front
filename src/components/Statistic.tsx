import React, { useState } from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonProgressBar,
  IonCardTitle,
  IonText,
  IonSearchbar,
  IonDatetime,
  IonItem,
  IonLabel,
} from "@ionic/react";
import "./ExploreContainer.css";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "./statistic.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface StatisticProps {
  name: string;
}

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "dark",
};

const Statistic: React.FC<StatisticProps> = ({ name }) => {
  const [val, setVal] = useState<Date>(new Date());
  // console.log(val.toLocaleDateString());
  const percentage = 66;
  return (
    <IonContent>
      <IonGrid>
        <IonRow class="circle-row ion-justify-content-center ion-align-items-center">
          <IonCol sizeLg="4" sizeXs="10">
            <IonText>Calories Consommées</IonText>
            <br />
            <IonText>Calories Brulées</IonText>
          </IonCol>
          <IonCol sizeLg="4" sizeXs="10">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </IonCol>
          <IonCol sizeLg="4" sizeXs="10">
            <IonText>Nb. d'exercises</IonText>
            <br />
            <IonText>Nb. de repas</IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Date début</IonLabel>
              <IonDatetime displayFormat="YYYY-MM-DD"></IonDatetime>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonLabel>Date fin</IonLabel>
              <IonDatetime displayFormat="YYYY-MM-DD"></IonDatetime>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonText class="cardTitle">Objectif à 34%</IonText> <br />
                Vous êtes un peu loin ! Allez courage !
              </IonCardHeader>
              <br />
              <IonCardContent>
                <IonProgressBar color="danger" value={0.3}></IonProgressBar>
                <br />
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonText class="cardTitle">Calories brûlés à 56%</IonText>{" "}
                <br />
                Vous êtes à moitié de route ! Faites plus d'exercices
                régulièrement
              </IonCardHeader>
              <br />
              <IonCardContent>
                <IonProgressBar value={0.5}></IonProgressBar>
                <br />
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Statistic;
