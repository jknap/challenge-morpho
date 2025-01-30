'use client';

// TODO - fix the cdn issue so that we can use the nextjs Image component
/* eslint-disable @next/next/no-img-element */
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ArrowRightLeft } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '@/components/ui/buttons/button';
import { fetchGraphQL } from '@/lib/api/graphql';
import { VaultResponse, getVaultQuery } from '@/lib/api/queries';

function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function Vault({
  chainId,
  vaultAddress,
}: {
  chainId: string;
  vaultAddress: string;
}) {
  const queryClient = useQueryClient();

  const { data, isPending, error, isFetching } = useQuery({
    queryKey: ['vault', chainId, vaultAddress],
    queryFn: () =>
      fetchGraphQL<VaultResponse>(getVaultQuery(chainId, vaultAddress)),
  });

  const onRefresh = () => {
    queryClient.invalidateQueries({
      queryKey: ['vault', chainId, vaultAddress],
    });
  };

  const curators = useMemo(
    () =>
      data?.vaultByAddress?.metadata?.curators
        .map((curator) => curator.name)
        .join(', '),
    [data]
  );

  const formattedAddress = useMemo(
    () => formatAddress(vaultAddress),
    [vaultAddress]
  );

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='h-screen flex flex-col gap-4 items-center justify-center'>
      <div className='w-[360px] flex flex-col gap-2 p-5 bg-white rounded-lg'>
        <div className='flex items-center border-b p-2 gap-2'>
          <img
            src={data?.vaultByAddress?.metadata?.image}
            alt='vault-metadata-image'
            width={66}
            height={66}
            className='rounded-full'
          />
          <div className='flex flex-col'>
            <div className='font-medium text-black text-lg'>
              {data?.vaultByAddress?.name}
            </div>
            <div className='text-morpho-text-body'>{curators}</div>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-black'>Vault Owner</div>
          <div className='text-morpho-text-body'>{formattedAddress}</div>
        </div>
        <Button
          variant='morpho'
          lucideIcon={ArrowRightLeft}
          loading={isFetching}
          onClick={onRefresh}
          size='icon-lg'
          className='ml-auto'
        />
      </div>
    </div>
  );
}
