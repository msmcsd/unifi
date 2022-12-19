import { Grid } from "@mui/material";
import CommandList from "./CommandList";
import InputArea from "./InputArea";
import ListGrid from "./loggingArea/List/ListGrid";
// import StatusGrid from "./loggingArea/DataGrid/StatusGrid";
import CommandListType from "../constants/CommandListType";

const ClientArea = ({dosTasks, installTasks, downloadTask }) => {

  return (
    <Grid // Main grid that covers the whole client area. There are 3 columnds.
      container
      direction="row"
      // alignItems="flex-start"
    >
      <Grid item xs={1} md={2}  // Column 1: displays install and download commands
      >
        <Grid container direction="column">
          <InputArea />
          <CommandList name="Install" list={installTasks} variant={CommandListType.Install} />
          <CommandList key={downloadTask.name} name={downloadTask.name} list={downloadTask.commands} variant={CommandListType.Download} />
        </Grid>
      </Grid>  
      <Grid item xs={1} md={4} // Column 2: displays dos commands
      >
        <Grid
          container
          // spacing={0}
          // columns={{ xs: 2, sm: 2, md: 2 }}
          direction= "row"
          // flexWrap="wrap"
        >
          {
            dosTasks.map(t => (t.commands && t.commands.length > 0 && <CommandList key={t.name} name={t.name} variant={CommandListType.Dos} list={t.commands}/>))
          }
        </Grid>
      </Grid>
      <Grid item xs={1} md={6} // Column 3: displays logs
      > 
        <Grid
        container
        flexGrow={1}
        >
          <Grid item>
            {/* <StatusGrid/> */}
            <ListGrid />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ClientArea;