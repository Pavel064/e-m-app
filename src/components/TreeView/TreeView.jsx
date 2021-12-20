import React, {useContext} from "react";
import {RepositoryContext, FileContext} from 'gitea-react-toolkit';

const TreeView = () => {
  const { state: repo, component: repoComponent } = useContext(RepositoryContext);
  
  return (
    <div className="item TreeView">
      {(!repo && repoComponent) || fileComponent},
    </div>
  );
};

export default TreeView;

/* оператор && (И) возвращает первое ложное значение
   оператор || (ИЛИ) возвращает первое истинное значение
   оператор ! (НЕ) приводит аргумент к логическому типу true/false,
   затем возвращает противоположное значение
*/ 
