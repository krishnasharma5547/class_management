import Alert from './Alerts'

export default {
    title: "Alert",
    component:Alert,
}

export const main =  (args:any) => <Alert {...args}></Alert>

main.args ={
        children:"Alert"
}