import { useEffect, useState, useContext } from 'react';
import { Context } from '../contexts/auth.context';
import PrimarySearchAppBar from '../components/navigation/AppBar';
import { useAuth } from '../hooks/useAuth';


export default function Search({ themeTrigger }) {
  const { state, dispatch } = useContext(Context);
  useAuth();

  return (
    <>
			<PrimarySearchAppBar trigger={themeTrigger} />
    </>
  )
}