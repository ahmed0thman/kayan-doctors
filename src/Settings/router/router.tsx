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
import PatientArchive from "../../Pages/Patients/AllPatients/PatientArchive/PatientArchive";
import PatientChart from "../../Pages/AccountReports/PatientChart/PatientChart";
import BarChart from "../../Pages/AccountReports/BarChart/BarChart";
import Inputs from "../../Pages/AccountReports/BarChart/Inputs";
import Expense from "../../Pages/AccountReports/BarChart/Expense";
import Messages from "../../Pages/Messages/Messages";
import Received from "../../Pages/Messages/Received";
import Sent from "../../Pages/Messages/Sent";
import NewMessage from "../../Pages/Messages/NewMessage";
export const router = createBrowserRouter([
  {
    path: `/login`,
    element: (
      <Login />
    )
  },
  {
    path: `/messages`,
    element: (
      <RequiredAuth>
        <Layout>
          <Messages />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/messages/received`,
    element: (
      <RequiredAuth>
        <Layout>
          <Messages>
            <Received/>
          </Messages>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/messages/sent`,
    element: (
      <RequiredAuth>
        <Layout>
          <Messages>
            <Sent/>
          </Messages>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/messages/new`,
    element: (
      <RequiredAuth>
        <Layout>
          <Messages>
            <NewMessage/>
          </Messages>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/settings`,
    element: (
      <RequiredAuth>
        <Layout>
          <BasicSettings />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/settings/prescriptions`,
    element: (
      <RequiredAuth>
        <Layout>
          <PrescriptionSettings />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/settings/change-password`,
    element: (
      <RequiredAuth>
        <Layout>
          <ChangePassword />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/settings/change-language`,
    element: (
      <RequiredAuth>
        <Layout>
          <ChangeLanguage />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/`,
    element: (
      <RequiredAuth>
        <Layout>
          <Home />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/easy`,
    element: (
      <RequiredAuth>
        <Layout>
          <Easy />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/easy/allPatient`,
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
    path: `/easy/newPatient`,
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
    path: `/dr-easy`,
    element: (
      <RequiredAuth>
        <Layout>
          <DrEasy />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/re-examination`,
    element: (
      <RequiredAuth>
        <Layout>
          <ReExamination />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/add-patients`,
    element: (
      <RequiredAuth>
        <Layout>
          <AddPatient />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/add-patients/new-reservation`,
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
    path: `/add-patients/old-reservation`,
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
    path: `/add-patients/online-reservation`,
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
    path: `/following-up`,
    element: (
      <RequiredAuth>
        <Layout>
          <FollowingUp />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/examination`,
    element: (
      <RequiredAuth>
        <Layout>
          <Examination />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/examination/new`,
    element: (
      <RequiredAuth>
        <Layout>
          <New />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/examination/resumption`,
    element: (
      <RequiredAuth>
        <Layout>
          <Resumption />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/examination/waiting`,
    element: (
      <RequiredAuth>
        <Layout>
          <Waiting />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/examination/new/:code`,
    element: (
      <RequiredAuth>
        <Layout>
          <NewDetails />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/patients`,
    element: (
      <RequiredAuth>
        <Layout>
          <AllPatients />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/patients/archive/:code`,
    element: (
      <RequiredAuth>
        <Layout>
          <PatientArchive />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/live`,
    element: (
      <RequiredAuth>
        <Layout>
          <Live />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/medical-test`,
    element: (
      <RequiredAuth>
        <Layout>
          <MedicalTest />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/account-reports`,
    element: (
      <RequiredAuth>
        <Layout>
          <AccountReports />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/account-reports/patients`,
    element: (
      <RequiredAuth>
        <Layout>
          <PatientChart />
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/account-reports/bar-chart`,
    element: (
      <RequiredAuth>
        <Layout>
          <BarChart/>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/account-reports/bar-chart/inputs`,
    element: (
      <RequiredAuth>
        <Layout>
          <BarChart>
            <Inputs/>
          </BarChart>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/account-reports/bar-chart/expense`,
    element: (
      <RequiredAuth>
        <Layout>
          <BarChart>
            <Expense/>
          </BarChart>
        </Layout>
      </RequiredAuth>
    )
  },
  {
    path: `/account-reports/bar-chart/net-profit`,
    element: (
      <RequiredAuth>
        <Layout>
          <BarChart>
            <Expense netProfit/>
          </BarChart>
        </Layout>
      </RequiredAuth>
    )
  },
],{ basename: '/kayan' })