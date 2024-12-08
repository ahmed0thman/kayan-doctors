import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Account/LogIn/Login";
import Easy from "../../Pages/Easy/Easy";
import DrEasy from "../../Pages/DrEasy/DrEasy";
import ReExamination from "../../Pages/ReExamination/ReExamination";
import AddPatient from "../../Pages/Patients/AddPatient/AddPatient";
import FollowingUp from "../../Pages/FollowingUp/FollowingUp";
import Examination from "../../Pages/Examination/Examination";
import AllPatients from "../../Pages/Patients/AllPatients/AllPatients";
import Live from "../../Pages/Live/Live";
import MedicalTest from "../../Pages/MedicalTest/MedicalTest";
import AccountReports from "../../Pages/AccountReports/AccountReports";

export const router = createBrowserRouter([
  {
    path:'/login',
    element:(
      <Login />
    )
  },
  {
    path:'/',
    element:(
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path:'/easy',
    element:(
      <Layout>
        <Easy />
      </Layout>
    )
  },
  {
    path:'/dr-easy',
    element:(
      <Layout>
        <DrEasy />
      </Layout>
    )
  },
  {
    path:'/re-examination',
    element:(
      <Layout>
        <ReExamination />
      </Layout>
    )
  },
  {
    path:'/patients/add-patients',
    element:(
      <Layout>
        <AddPatient />
      </Layout>
    )
  },
  {
    path:'/following-up',
    element:(
      <Layout>
        <FollowingUp />
      </Layout>
    )
  },
  {
    path:'/examination',
    element:(
      <Layout>
        <Examination />
      </Layout>
    )
  },
  {
    path:'/patients',
    element:(
      <Layout>
        <AllPatients />
      </Layout>
    )
  },
  {
    path:'/live',
    element:(
      <Layout>
        <Live />
      </Layout>
    )
  },
  {
    path:'/medical-test',
    element:(
      <Layout>
        <MedicalTest />
      </Layout>
    )
  },
  {
    path:'/account-reports',
    element:(
      <Layout>
        <AccountReports />
      </Layout>
    )
  },
])