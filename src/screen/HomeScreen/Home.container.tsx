import React, {useEffect, useState} from 'react';
import HomeScreen from './Home.view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {HomeProps} from './Home.props';

const HomeContainer = (props: HomeProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const generatedProps = {};

  return <HomeScreen {...generatedProps} {...props} />;
};
export default HomeContainer;
