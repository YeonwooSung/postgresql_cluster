import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import { createClusterButtonHandler } from '@widgets/clusters-table/lib/functions.ts';
import DatabaseIcon from '@assets/databaseIcon.svg?react';

const ClustersEmptyRowsFallback: React.FC = () => {
  const { t } = useTranslation('clusters');
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh" margin="16px">
      <DatabaseIcon width="120" height="120" fill="#00000033" />
      <Stack width="30%" alignItems="flex-start" gap="24px">
        <Stack gap="8px">
          <Typography variant={'h5'} fontWeight="bold" whiteSpace="pre-line">
            {t('noPostgresClustersTitle')}
          </Typography>
          <Typography whiteSpace="pre-line">
            {t('noPostgresClustersLine1', { createCluster: t('createCluster') })}
          </Typography>
        </Stack>
        <Button variant="contained" onClick={createClusterButtonHandler(navigate)}>
          {t('createCluster')}
        </Button>
      </Stack>
    </Box>
  );
};

export default ClustersEmptyRowsFallback;
