import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Account/LogIn/Login";
import Easy from "../../Pages/Easy/Easy";
import OldPatient from "../../Pages/Easy/OldPatients/OldPatients";
import AddNewPatient from "../../Pages/Easy/AddNewPatient/AddNewPatient";
import DrEasy from "../../Pages/DrEasy/DrEasy";
import ReExamination from "../../Pages/ReExamination/ReExamination";
import AddPatient from "../../Pages/Patients/AddPatient/AddPatient";
import FollowingUp from "../../Pages/FollowingUp/FollowingUp";
import Examination from "../../Pages/Examination/Examination";
import AllPatients from "../../Pages/Patients/AllPatients/AllPatients";
import Live from "../../Pages/Live/Live";
import MedicalTest from "../../Pages/MedicalTest/MedicalTest";
import AccountReports from "../../Pages/AccountReports/AccountReports";
import BasicSettings from "../../Pages/Settings/BasicSettings/BasicSettings";
import PrescriptionSettings from "../../Pages/Settings/PrescriptionSettings/PrescriptionSettings";
import ChangePassword from "../../Pages/Settings/ChangePassword";
import ChangeLanguage from "../../Pages/Settings/ChangeLanguage";
import RequiredAuth from "../../Settings/authentication/RequiredAuth";
import NewReservation from "../../Pages/Patients/AddPatient/NewReservation/NewReservation";
import OldReservation from "../../Pages/Patients/AddPatient/OldReservation/OldReservation";
import OnlineReservation from "../../Pages/Patients/AddPatient/OnlineReservation/OnlineReservation";
import New from "../../Pages/Examination/New/New";
import NewDetails from "../../Pages/Examination/New/NewDetails";
import Resumption from "../../Pages/Examination/Resumption/Resumption";
import Waiting from "../../Pages/Examination/Waiting/Waiting";

export const router = createBrowserRouter([
  {
    path: `${process.env.REACT_APP_URL_Publish}login`,
    element: (
      <Login />
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}settings`,
    element: (
      <RequiredAuth>
        <Layout>
          <BasicSettings />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}settings/prescriptions`,
    element: (
      <RequiredAuth>
        <Layout>
          <PrescriptionSettings />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}settings/change-password`,
    element: (
      <RequiredAuth>
        <Layout>
          <ChangePassword />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}settings/change-language`,
    element: (
      <RequiredAuth>
        <Layout>
          <ChangeLanguage />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}`,
    element: (
      <RequiredAuth>
        <Layout>
          <Home />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}easy`,
    element: (
      <RequiredAuth>
        <Layout>
          <Easy />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}easy/allPatient`,
    element: (
      <RequiredAuth>
        <Layout>
          <Easy>
            <OldPatient />
          </Easy>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}easy/newPatient`,
    element: (
      <RequiredAuth>
        <Layout>
          <Easy>
            <AddNewPatient />
          </Easy>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}dr-easy`,
    element: (
      <RequiredAuth>
        <Layout>
          <DrEasy />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}re-examination`,
    element: (
      <RequiredAuth>
        <Layout>
          <ReExamination />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}add-patients`,
    element: (
      <RequiredAuth>
        <Layout>
          <AddPatient />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}add-patients/new-reservation`,
    element: (
      <RequiredAuth>
        <Layout>
          <AddPatient>
            <NewReservation />
          </AddPatient>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}add-patients/old-reservation`,
    element: (
      <RequiredAuth>
        <Layout>
          <AddPatient>
            <OldReservation />
          </AddPatient>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}add-patients/online-reservation`,
    element: (
      <RequiredAuth>
        <Layout>
          <AddPatient>
            <OnlineReservation />
          </AddPatient>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}following-up`,
    element: (
      <RequiredAuth>
        <Layout>
          <FollowingUp />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}examination`,
    element: (
      <RequiredAuth>
        <Layout>
          <Examination />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}examination/new`,
    element: (
      <RequiredAuth>
        <Layout>
          <New />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}examination/resumption`,
    element: (
      <RequiredAuth>
        <Layout>
          <Resumption />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}examination/waiting`,
    element: (
      <RequiredAuth>
        <Layout>
          <Waiting />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}examination/new/:code`,
    element: (
      <RequiredAuth>
        <Layout>
          <NewDetails />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}patients`,
    element: (
      <RequiredAuth>
        <Layout>
          <AllPatients />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}live`,
    element: (
      <RequiredAuth>
        <Layout>
          <Live />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}medical-test`,
    element: (
      <RequiredAuth>
        <Layout>
          <MedicalTest />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `${process.env.REACT_APP_URL_Publish}account-reports`,
    element: (
      <RequiredAuth>
        <Layout>
          <AccountReports />
        </Layout>
      </RequiredAuth>
    )
  },
])