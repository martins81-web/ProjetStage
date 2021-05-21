import {
    Checkbox,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
} from '@material-ui/core/';
import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import { toAbsoluteUrl } from '../../_metronic/_helpers';
import { NewTaskDialog } from './dialogs/NewTaskDialog';
import { TaskDeleteDialog } from './dialogs/TaskDeleteDialog';
import { TaskEditDialog } from './dialogs/TaskEditDialog';


const tasks = [
    {
      id: 1,
      name: 'Découpage des pages',
      description: 'Intégrer la partie statique du site ',
      autoEval: 4,
      managerEval: 4,
      tutorEval: 5,
      level: 4,
      startDate: '05/31/2021',
      endDate: '07/31/2021',
    },
    {
        id: 2,
        name: 'Programmer la logique',
        description: 'Faire la logique des fonctionalités',
        autoEval: 4,
        managerEval: 5,
        tutorEval: 5,
        level: 5,
        startDate:'05/20/2021',
        endDate: '07/15/2021',
      },
  ];

const newTask={
    name: '',
    description: '',
    autoEval: undefined,
    managerEval: undefined,
    tutorEval: undefined,
    level: undefined,
    startDate: '',
    endDate: '',
  };

const DashboardStagiaires = () => {

    const [openDeleteDialog, setOpenDeleteDialog]= useState(false);
    const [openEditDialog, setOpenEditDialog]= useState(false);
    const [openNewDialog, setOpenNewDialog]= useState(false);

    const handleClose =()=>{
        setOpenDeleteDialog(false);
        setOpenEditDialog(false);
        setOpenNewDialog(false);
    };


  return (
      <>
    <Wrapper className='m-20'>
        <Grid container className='bg-white p-20'>
            <Grid item xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item><h3>Liste des tâches</h3></Grid>
                    <Grid item><button type="button" onClick={()=>setOpenNewDialog(newTask)} className="btn btn-primary">Nouvelle tâche</button></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell >
                                <Checkbox
                            // checked={rowCount > 0 && numSelected === rowCount}
                            // onChange={onSelectAllClick}
                                inputProps={{ 'aria-label': 'Selectionner tous les tâches' }}
                            />  
                            </TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Auto évaluation</TableCell>
                            <TableCell>Évaluation entreprise</TableCell>
                            <TableCell>Évaluation tuteur</TableCell>
                            <TableCell>Niveau</TableCell>
                            <TableCell>Date de début</TableCell>
                            <TableCell>Date de fin</TableCell>
                            <TableCell align='center'>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map(task=>
                        <TableRow key={'task'+task.id}>
                            <TableCell><Checkbox/></TableCell>
                            <TableCell>{task.name}</TableCell>
                            <TableCell>{task.description}</TableCell>
                            <TableCell align='center'>{task.autoEval}</TableCell>
                            <TableCell align='center'>{task.managerEval}</TableCell>
                            <TableCell align='center'>{task.tutorEval}</TableCell>
                            <TableCell align='center'>{task.level}</TableCell>
                            <TableCell>{task.startDate}</TableCell>
                            <TableCell>{task.endDate}</TableCell>
                            <TableCell align='center'>
                                <button
                                    onClick={()=>setOpenEditDialog(task)}
                                    className='btn btn-icon btn-light btn-hover-primary btn-sm mx-3'
                                >
                                    <span className='svg-icon svg-icon-md svg-icon-primary'>
                                    <SVG
                                        src={toAbsoluteUrl(
                                        '/media/svg/icons/Communication/Write.svg'
                                        )}
                                    ></SVG>
                                    </span>
                                </button>
                                <button
                                    onClick={()=>setOpenDeleteDialog(task.id)}
                                    className='btn btn-icon btn-light btn-hover-danger btn-sm'
                                >
                                    <span className='svg-icon svg-icon-md svg-icon-danger'>
                                    <SVG
                                        src={toAbsoluteUrl(
                                        '/media/svg/icons/General/Trash.svg'
                                        )}
                                    ></SVG>
                                    </span>
                                </button>
                            </TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    </Wrapper>
    { openDeleteDialog && <TaskDeleteDialog  onClose={handleClose} id={openDeleteDialog}/>}
    { openEditDialog  && <TaskEditDialog  onClose={handleClose} task={openEditDialog}/>}
    { openNewDialog && <NewTaskDialog  task={openNewDialog} onClose={handleClose}/>}
    </>
  );
};

export default DashboardStagiaires;

const Wrapper = styled.div`
 
`;
