import { useEffect, useState, useCallback } from 'react';
import {
  useGetHeroletesAttributesMutation,
  useGetNftsByUserMutation,
  useGetUserTradesMutation,
} from 'app/services/nft/NftService';
import { NFT, Attributes, FillsResult } from 'app/interfaces/NFT/NFT';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useEditProfileMutation } from 'app/services/user/UserService';

export interface FormValues {
  firstName: string;
  lastName: string;
  twitterUrl: string;
  discordUrl: string;
  avatarImg: string;
}

export const useProfile = () => {
  const { user } = useAppSelector(state => state.user);
  const [getNftsByUser, { isLoading }] = useGetNftsByUserMutation();
  const [getHeroletesAttributes] = useGetHeroletesAttributesMutation();
  const [getUserTrades] = useGetUserTradesMutation();
  const [editProfile, { isLoading: isEditProfileLoading }] = useEditProfileMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [userTrades, setUserTrades] = useState<FillsResult[]>([]);
  const [nftAttributes, setNftAttributes] = useState<Attributes[]>([]);
  const [NftsCount, setNftsCount] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const itemsPerPage = 6;

  const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    twitterUrl: z.string(),
    discordUrl: z.string(),
    avatarImg: z.string().min(1),
  });

  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      twitterUrl: user.twitterUrl,
      discordUrl: user.discordUrl,
      avatarImg: user.avatarImg,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    editProfile(data);
    handleCloseEditProfile();
  };

  const loadData = useCallback(() => {
    getHeroletesAttributes().then((response: any) => setNftAttributes(response.data));
    getNftsByUser({ start: 0, end: itemsPerPage }).then((response: any) => {
      setNfts(response.data.nfts);
      setNftsCount(response.data.count);
    });
    getUserTrades('200').then((response: any) => setUserTrades(response.data.result));
  }, [getHeroletesAttributes, getNftsByUser, getUserTrades]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    setPageCount(Math.ceil(NftsCount / itemsPerPage));
  }, [NftsCount, pageOffset]);

  const handlePageClick = (event: any) => {
    setPageOffset(event.selected);
    getNftsByUser({
      start: event.selected * itemsPerPage,
      end: event.selected * itemsPerPage + itemsPerPage,
    }).then((response: any) => setNfts(response.data.nfts));
  };

  const handleOpenEditProfile = () => setIsEditProfileOpen(true);

  const handleCloseEditProfile = () => {
    clearErrors();
    reset();
    setIsEditProfileOpen(false);
  };

  return {
    errors,
    handleCloseEditProfile,
    handleOpenEditProfile,
    handlePageClick,
    handleSubmit,
    isEditProfileLoading,
    isEditProfileOpen,
    isLoading,
    nftAttributes,
    nfts,
    onSubmit,
    pageCount,
    pageOffset,
    register,
    setValue,
    user,
    userTrades,
  };
};
