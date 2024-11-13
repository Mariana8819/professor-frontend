import axios from 'axios';
import {
  ListStudentsFromClassByIdService,
  ListStudentsFromClassByIdServiceResult,
} from './list-professor-classes-by-id.types';

export const listStudentsFromClassByIdService: ListStudentsFromClassByIdService = async ({
  urlBase,
  classId,
}) => {

  const url = `${urlBase}/class/${classId}/students`;  //esto agregue
  console.log("URL de la API:", url); //esto agregue
  const { data } = await axios.get<ListStudentsFromClassByIdServiceResult>(
    `${urlBase}/class/${classId}/students`,
  );

  console.log('Retorno students:::', data)
  return data;
};
