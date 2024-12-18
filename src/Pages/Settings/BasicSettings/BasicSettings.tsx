
import SettingsNav from '../SettingsNav'
import BasicInfo from './BasicInfo'
import Addresses from './Addresses'
import DisclosureInformation from './DisclosureInformation'
import Services from './Services'
import Schedules from './Schedules'
import ExtraSettings from './ExtraSettings'
import AssistantPassword from './AssistantPassword'


const BasicSettings = () => {
  
  return (
    <>
      <SettingsNav active="basic" />
      <BasicInfo />
      <Addresses />
      <DisclosureInformation />
      <Services />
      <Schedules />
      <ExtraSettings />
      <AssistantPassword />
    </>
  )
}

export default BasicSettings