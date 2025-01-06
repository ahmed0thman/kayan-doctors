import React, { useState } from 'react'
import { message, sentMessages } from './types'
import DataGrid from '../../Components/DataGrid/DataGrid'

const Sent = () => {
  const [recivedMsgs, setReceivedMsgs] = useState<message[]>(sentMessages)
  return (
    <>
    <DataGrid
    dataSource={recivedMsgs}
    columns={recivedMsgs[0]}
    />
    </>
  )
}

export default Sent
