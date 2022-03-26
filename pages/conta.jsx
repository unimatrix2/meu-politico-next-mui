import { useAuth } from '../hooks/useAuth';
import ResponsiveDrawer from '../components/navigation/Drawer';
import { upperDrawerItemsEnum, lowerDrawerItemsEnum } from '../enums/accountDrawer.enum';

export default function Account({ themeTrigger }) {
	
	useAuth();

	return (
		<>
			<ResponsiveDrawer
				upperDrawer={upperDrawerItemsEnum}
				lowerDrawer={lowerDrawerItemsEnum}
				trigger={themeTrigger}
				mobileOnly={false}
			/>
		</>
	)

}