import { useAuth } from '../hooks/useAuth';
import ResponsiveDrawer from '../components/navigation/Drawer';
import { upperDrawerItemsEnum, lowerDrawerItemsEnum } from '../enums/accountDrawer.enum';

export default function Account({ themeTrigger }) {
	
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