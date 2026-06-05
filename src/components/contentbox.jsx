
import HomeView from './viewtypes/homeView.jsx';
import InventoryView from './viewtypes/inventoryView.jsx';
import InSeasonView from './viewtypes/inSeasonView.jsx';
import AboutView from './viewtypes/aboutView.jsx';
import ContactView from './viewtypes/contactView.jsx';

export default function ContentBox({curState, setCurState}) {
    switch(curState) {
        case 'home':
            return <HomeView
                setCurState={setCurState}
                />
        case 'inventory':
            return <InventoryView
                setCurState={setCurState}
                />
        case 'in-season':
            return <InSeasonView/>
        case 'about':
            return <AboutView/>
        case 'contact':
            return <ContactView/>
        default:
            throw new Error("Unrecognized curState in ContentBox");
    }
}