import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactDOM from 'react-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Loading_Item from './Loading_Item';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import MaterialTable from 'material-table';

import { makeStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
const tableIcons = {
  Add: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ViewColumn {...props} ref={ref} />)
};
const datas=[
  { DesignationFr: 'Mehmet', DesignationAr: 'Baran'},
];

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    minHeight:140,
  },
  media: {
    height: 500,
  },
  root:{
    padding:10,
  },
});

class Call_Api extends Component {
    constructor(props) {
      super();
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          secondary:false,
          dense:false,
          Title:"Liste des "+props.name
        };
        this.DeleteThis = this.DeleteThis.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }

DeleteThis(event){
  event.preventDefault();
        fetch('http://127.0.0.1:5000/'+this.props.name+'/Delete/'+event.currentTarget.id, {
          method: 'DELETE',
        }).then(function(response) {
      }, function(error) {
        alert(error.message); //=> String
      });
      }
componentDidMount(){
    fetch('http://127.0.0.1:5000/api/type')
    .then(response=>response.json())
    .then(res=>{
        this.setState({
            isLoaded:true,
            items:res,
            })
        }
        ,
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });

}
render(){
    const { error, isLoaded, items,Title } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div><Loading_Item /></div>;
    } else {
        return (
          <MaterialTable
            icons={tableIcons}
            title={Title}
            columns={[
              { title: 'Designation Fr', field: 'description_Fr' },
              { title: 'Designation Ar', field: 'description_Ar' },
            ]}
            data={items}
            actions={[
              {
                icon: () => <EditIcon color='primary'/>,
                tooltip: 'Edit User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
              },
              {
                icon:  () => <DeleteIcon color='secondary' />,
                tooltip: 'Delete User',
                onClick: (event, rowData) => alert("You want to delete " + rowData.name)
              }
            ]}
            options={{
              exportButton: true,
              pageSize:20,
              pageSizeOptions:[5, 10, 20,50],
              sorting:true
            }}
          />

        );
        }
    }
}

export default Call_Api;
