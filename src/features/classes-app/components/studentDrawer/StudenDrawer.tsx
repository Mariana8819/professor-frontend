import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface StudentDrawerProps {
    student: {
      id: string;
      name: string;
      classCode: string;
    };
    onClose: () => void;
  }

export const StudentDrawer: React.FC<StudentDrawerProps> = ({ student, onClose}) => {
    const {classId} = useParams();
    const [formData, setFormData] = useState({
        aulasLecionadas: '',
        aulasAtendidas: '',
        notaP1: '',
        notaP2: '',
    });

    const handleInputChange = (event) =>{
        const { name, value} = event.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = async () =>{
        try {
            const payload = {
                studentId: student.id,
                classCode: student.classCode,
                ...formData,                
            };
            console.log('aqui mi payload', payload)

            await axios.post(`http://localhost:8080/class/${classId}/students/launch-grades-attendance`, payload);
            alert('Notas e frequência lançadas com sucesso!');
            onClose();
        } catch (error) {
            console.error('Erro ao lançar notas:', error);
      alert('Erro ao lançar notas');
        }
    };

    return (
        <Drawer anchor='right' open={Boolean(student)} onClose={onClose}>
            <Box sx={{width: 300, padding:2 }}>
                <Typography variant='h6'>Lançar Notas e Frequência</Typography>
                <TextField
                label="Aulas Lecionadas"
                name="aulasLecionadas"
                value={formData.aulasLecionadas}
                onChange={handleInputChange}
                fullWidth
                margin='normal'
                />
                <TextField 
                label="Aulas Atendidas"
                name='aulasAtendidas'
                value={formData.aulasAtendidas}
                onChange={handleInputChange}
                fullWidth
                margin='normal'
                />
                <TextField 
                label='Nota P1'
                name= 'notaP1'
                value={formData.notaP1}
                onChange={handleInputChange}
                fullWidth
                margin='normal'
                />
                <TextField 
                label='Nota P2'
                name='notaP2'
                value={formData.notaP2}
                onChange={handleInputChange}
                fullWidth
                margin='normal'
                />
                <Button 
                variant='contained' 
                color='primary' 
                onClick={handleSubmit} 
                sx={{ marginTop: 2}}
                disabled={!formData.aulasLecionadas || !formData.aulasAtendidas || !formData.notaP1 || !formData.notaP2}
                >
                Lançar Notas e Frequência
                </Button>
            </Box>
        </Drawer>
    )
}