import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonThumbnail,
  IonList,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  isPlatform,
  IonAlert,
} from "@ionic/react";
import image from "../assets/meme.jpg";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { useCamera } from "@ionic/react-hooks/camera";
import {
  CameraResultType,
  CameraSource,
  CameraPhoto,
  Capacitor,
  FilesystemDirectory,
  Plugins,
} from "@capacitor/core";
import axios from "axios";
import { stringify } from "querystring";
import "./Calendrier.css";

const { Camera } = Plugins;
interface ProfileProps {
  name: string;
}

const Profile: React.FC<ProfileProps> = ({ name }) => {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [pwd, setPwd] = useState<String>("");
  const [oldPwd, setOldPwd] = useState<String>("");
  const [age, setAge] = useState<String>();
  const [taille, setTaille] = useState<String>();
  const [sexe, setSexe] = useState<String>();
  const [obj, setObj] = useState<String>();
  const [photo, setPhoto] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [nom, setNom] = useState<string>();
  const [prenom, setPrenom] = useState<string>();
  const [poid, setPoid] = useState<string>();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [oldUsername, setOldUsername] = useState(
    username?.slice(1, username.length - 1)
  );
  const [id, setId] = useState(localStorage.getItem("id"));
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("Mise à jour avec succès");

  async function takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });

    let imageUrl = image.webPath;

    // Can be set to the src of an image now
    setPhoto(imageUrl);
  }

  const takePhotoComponent = () => {
    // console.log(isPlatform("desktop"));
    if (isPlatform("desktop")) {
      return (
        <IonItem>
          <input
            className="item-input"
            type="file"
            onChange={(e) => setPhoto(e.target.value)}
          ></input>
        </IonItem>
      );
    } else {
      return (
        <IonItem>
          <IonButton>Choisir une photo</IonButton>
          <IonImg
            style={{ border: "1px solid black", minHeight: "100px" }}
            src={photo}
          ></IonImg>
        </IonItem>
      );
    }
  };

  async function submitMoreInfo() {
    let config = {
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    await axios
      .post(
        `http://localhost:888/api/service/user/${localStorage.getItem(
          "id"
        )}/addProfile`,
        {
          birthdate: selectedDate,
          currentWeight: poid,
          firstname: prenom,
          lastname: nom,
          gender: sexe,
          heightCm: taille,
          image: photo,
        },
        config
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  async function submitUpdate() {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Accept-Charset": "UTF-8",
        // "Acces-Control-Allow-Origin": "*/*",
        // "Access-Control-Allow-Headers":
        //   "Origin, X-Requested-With, Content-Type, Accept",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    await axios
      .put(
        `http://127.0.0.1:888/api/service/user/updateRequestSign/${id}`,
        {
          username: username,
          email: email,
          password: pwd,
        },
        config
      )
      .then((res) => {
        // console.log(res.data);
        // localStorage.setItem("email", res.data.email);
        localStorage.setItem("username", res.data.username);
        setUsername(res.data.username);
        localStorage.setItem("email", res.data.email);
        setEmail(res.data.email);
        window.location.reload();
      })
      .catch((err) => alertError(err.response.data.message));
  }
  function alertError(message: string) {
    setMessage(message);
    setAlert(true);
  }

  async function submitUpdatePassword() {
    let config = {
      headers: {
        // Accept: "application/json",
        // "Access-Control-Allow-Headers":
        //   "Origin, X-Requested-With, Content-Type, Accept",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    await axios
      .put(
        `http://localhost:888/api/service/user/detailsUser/${id}/updatePassword`,
        {
          oldPassword: oldPwd,
          newPassword: pwd,
        },
        config
      )
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem("email", res.data.email);
        localStorage.setItem("username", res.data.username);
      })
      .catch((err) => console.log(err));
  }

  function handleSubmitMoreInfo() {
    submitMoreInfo();
  }
  function handleSubmitUpdate() {
    submitUpdate();
  }
  function handleSubmitUpdatePassword() {
    submitUpdatePassword();
  }

  // console.log(localStorage.getItem("id"));
  //console.log(photo);
  return (
    <IonContent>
      <IonAlert
        isOpen={alert}
        onDidDismiss={() => setAlert(false)}
        header={"Error"}
        //ubHeader={"Inscription avec succès"}
        message={message}
        buttons={["OK"]}
      />
      <IonGrid>
        <IonRow>
          <IonCard>
            <IonCardHeader>
              <IonThumbnail>
                <IonImg src={image} />
              </IonThumbnail>
              <IonCardTitle>Oukacha Fouzi</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>
        </IonRow>
        <IonRow>
          <IonCol sizeLg="6" sizeXs="12">
            <IonCard>
              <IonCardHeader class="title-card">
                Mettre à jour vos informations
                {/* {username?.slice(1, username.length - 1)} */}
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonLabel>Username</IonLabel>
                    <IonInput
                      type="text"
                      placeholder={username + ""}
                      onIonChange={(e) => setUsername(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>E-mail</IonLabel>
                    <IonInput
                      type="email"
                      placeholder={email + ""}
                      onIonChange={(e) => setEmail(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Mot de passe</IonLabel>
                    <IonInput
                      type="password"
                      placeholder="*********"
                      onIonChange={(e) => setPwd(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonRow>
                    <IonCol>
                      <IonButton
                        class="btn"
                        color="success"
                        expand="block"
                        fill="clear"
                        onClick={() => handleSubmitUpdate()}
                      >
                        Mettre à jour
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol sizeLg="6" sizeXs="12">
            {" "}
            <IonCard>
              <IonCardHeader class="title-card">
                Plus d'information pour plus de résultats
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonInput
                      type="text"
                      placeholder="Nom"
                      onIonChange={(e) => setNom(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput
                      type="text"
                      placeholder="Prénom"
                      onIonChange={(e) => setPrenom(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>YYYY:MM:DD</IonLabel>
                    <IonDatetime
                      displayFormat="YYYY:MM:DD"
                      value={selectedDate}
                      onIonChange={(e) => setSelectedDate(e.detail.value!)}
                    ></IonDatetime>
                  </IonItem>
                  <IonItem>
                    <IonSelect
                      placeholder="Sexe ..."
                      onIonChange={(e) => setSexe(e.detail.value)}
                    >
                      <IonSelectOption value="Homme">Homme</IonSelectOption>
                      <IonSelectOption value="Femmme">Femme</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  <IonItem>
                    <IonInput
                      type="number"
                      placeholder="Taille (Cm)"
                      onIonChange={(e) => setTaille(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput
                      type="number"
                      placeholder="Poids (Kg)"
                      onIonChange={(e) => setPoid(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  {takePhotoComponent()}
                  {/* <IonItem>
                    <IonSelect
                      placeholder="Objectif ..."
                      onIonChange={(e) => setObj(e.detail.value)}
                    >
                      <IonSelectOption value="1">Maigrir</IonSelectOption>
                      <IonSelectOption value="2">
                        Maintenir le poids
                      </IonSelectOption>
                      <IonSelectOption value="3">Grossir</IonSelectOption>
                    </IonSelect>
                  </IonItem> */}
                  <IonRow>
                    <IonCol>
                      <IonButton
                        class="btn"
                        color="success"
                        expand="block"
                        fill="clear"
                        onClick={(e) => handleSubmitMoreInfo()}
                      >
                        Enregistrer
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Profile;
