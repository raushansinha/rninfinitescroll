import { adapter } from "../../utils/adapterUtil";
const header = (title) => {
return {
        title,
        headerStyle: {
            backgroundColor: '#F0131E',
            fontSize: adapter(12)
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: adapter(16)
        },
    }
}

export default header;