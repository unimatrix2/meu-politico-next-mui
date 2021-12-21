import { useContext } from 'react';

import { useAuth } from '../hooks/useAuth';
import { Context } from '../contexts/auth.context';
import PrimarySearchAppBar from '../components/navigation/AppBar';
import ResponsiveDrawer from '../components/navigation/Drawer';
import { upperDrawerItemsEnum, lowerDrawerItemsEnum } from '../enums/accountDrawer.enum';

export default function Account({ themeTrigger }) {
	const [state, dispatch] = useContext(Context);
	useAuth();

	return (
		<>
			{/* <PrimarySearchAppBar trigger={themeTrigger} /> */}
			<ResponsiveDrawer
				upperDrawer={upperDrawerItemsEnum}
				lowerDrawer={lowerDrawerItemsEnum}
				trigger={themeTrigger}
				mobileOnly={false}
			/>
		</>
	)

}