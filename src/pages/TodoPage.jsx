import React from 'react';
import CreateList from '../components/todo/CreateList';
import ShowList from '../components/todo/showList';

const TodoPage = () => {
      return (
           <div>
            <CreateList/>
            <br />
            <br />
            <ShowList/>
           </div>
      );
};

export default TodoPage;