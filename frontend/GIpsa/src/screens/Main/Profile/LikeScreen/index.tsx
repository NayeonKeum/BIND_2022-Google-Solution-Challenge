import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import S from './Styles';
import { User } from 'shared/types/user';

import { MyStories } from 'shared/components';
import { useLikedStories } from 'shared/hook/useLikedStories';
import MyText from 'shared/components/MyText';

import { useCurrentUser } from 'src/provider/UserProvider';

const LikeScreen = ({ navigation }) => {
  const { currentUser } = useCurrentUser();

  const { likedStories } = useLikedStories(currentUser?.id);

  return (
    <View style={S.maincontainer}>
      <View style={S.titlecontainer}>
        <MyText fontSize={24} fontWeight={'bold'}>
          My Liked Stories
        </MyText>
      </View>
      <View style={S.subcontainer}>
        <MyText fontSize={16} fontWeight={'medium'}>
          Liked Stories
        </MyText>
      </View>
      <ScrollView style={S.container}>
        <MyStories stories={likedStories} />
      </ScrollView>
    </View>
  );
};

export default LikeScreen;
