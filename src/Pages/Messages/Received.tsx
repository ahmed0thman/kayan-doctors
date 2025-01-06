import React, { useState } from 'react'
import DataGrid from '../../Components/DataGrid/DataGrid'
import { message, receivedMessages } from './types'

const Received = () => {
  const [recivedMsgs, setReceivedMsgs] = useState<message[]>(receivedMessages)
  return (
    <DataGrid
    dataSource={recivedMsgs}
    columns={recivedMsgs[0]}
    />
  )
}

export default Received