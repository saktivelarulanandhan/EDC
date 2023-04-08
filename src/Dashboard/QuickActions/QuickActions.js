import { Grid, Paper } from '@mui/material';
import React from 'react';
import EDCCard from '../../Components/Card';

import TodayIcon from '@mui/icons-material/Today';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AttributionIcon from '@mui/icons-material/Attribution';
import ScienceIcon from '@mui/icons-material/Science';

function QuickActions() {
    return (
        <Grid container xs={3} md={10} lg={12} sx={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <Grid xs={12} md={4} lg={3} sx={{
                pl: 0,
                pt: 2,
                pb:2,
                pr: 2,
                display: 'flex',
                flexDirection: 'row'
            }}>
                <EDCCard name="Total Subject" count="9" icon={<AttributionIcon fontSize='small' />}/>
            </Grid>
            <Grid xs={12} md={4} lg={3} sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'row'
            }}>
                <EDCCard name="Overdue Visits" count="5" icon={<AccessAlarmIcon fontSize='small' />}/>
            </Grid>
            <Grid xs={12} md={4} lg={3} sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'row'
            }}>
                <EDCCard name="Todays Visits" count="10" icon={<TodayIcon fontSize='small' />}/>
            </Grid>
            <Grid xs={12} md={4} lg={3} sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'row'
            }}>
                <EDCCard name="Active Studies" count="20" icon={<ScienceIcon fontSize='small' />}/>
            </Grid>
        </Grid>
    )
}

export default QuickActions;