import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonFooter,
  IonHeader,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonItemDivider,
  IonInput,
  IonList,
  IonButton,
  IonRouterOutlet,
  IonApp,
  IonImg,
  IonNav,
  IonText,
} from "@ionic/react";
import { IonRouterLink } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import train from "../assets/train.svg";
import food from "../assets/food.svg";
import statistics from "../assets/statistics.svg";
import Login from "./Login";
import "./Welcome.css";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="nav">
        <IonGrid class="grid">
          <IonRow class="top-nav">
            <IonCol sizeXl="1" sizeMd="2" sizeXs="4" class="a">
              <IonRouterLink href="/">
                <IonText class="nav-logo">Okito</IonText>
              </IonRouterLink>
            </IonCol>
            <IonCol
              sizeXl="11"
              sizeMd="10"
              sizeXs="8"
              class="rest ion-justify-content-center ion-align-items-center"
            >
              <IonRouterLink class="rest" href="/login">
                Se connecter
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonHeader>
      <IonContent>
        <IonRow class="part1">
          <IonCol sizeMd="8" sizeXl="8" sizeXs="4"></IonCol>
          <IonCol
            sizeMd="4"
            sizeXl="4"
            sizeXs="8"
            class="ion-align-self-center"
          >
            <IonText class="h-text">
              Un mode de vie sain. En toute simplicité.
            </IonText>
            <br />
            <IonText class="b-text">
              L'appli bien-être qui vous aide à manger sainement pour atteindre
              vos objectifs santé et perte de poids.
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow class="ion-justify-content-around about">
          <IonCol
            sizeXl="4"
            sizeMd="6"
            sizeXs="12"
            class="col-about ion-text-center"
          >
            <IonImg class="about-img" src={train}></IonImg>
            <IonText class="h-about-text ion-align-items-center">
              Entraînez-vous !
            </IonText>
            <br />
            <br />
            <IonText class="b-about-text ">
              Choisissez les entraînements en fonction de votre besoin et le
              nombre de calories que vous voulez brûler.
            </IonText>
          </IonCol>
          <IonCol
            sizeXl="4"
            sizeMd="6"
            sizeXs="12"
            class="col-about ion-text-center"
          >
            <IonImg class="about-img" src={food}></IonImg>
            <IonText class="h-about-text">Mangez bien !</IonText>
            <br />
            <br />
            <IonText class="b-about-text">
              Choisissez les repas en fonction de votre capacité et le nombre de
              calories que vous voulez récupérer.
            </IonText>
          </IonCol>
          <IonCol
            sizeXl="4"
            sizeMd="6"
            sizeXs="12"
            class="col-about ion-text-center"
          >
            <IonImg class="about-img" src={statistics}></IonImg>
            <IonText class="h-about-text">Progressez !</IonText>
            <br />
            <br />
            <IonText class="b-about-text">
              Suivez votre progression grâce à un ensemble de statistiques et
              rapports qui vous permetteront de vous situez par rapport aux
              efforts que vous fournissez.
            </IonText>
          </IonCol>
        </IonRow>
        <IonFooter class="ion-text-end ion-justify-content-center ion-align-items-center footer">
          <IonText class="f-text">
            Made With Love By <strong>Nahla </strong>{" "}
          </IonText>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
