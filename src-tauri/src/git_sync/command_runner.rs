use std::path::Path;
use std::process::Output;

pub(crate) struct GitCommandRunner<'a> {
    workspace_root: Option<&'a Path>,
}

impl<'a> GitCommandRunner<'a> {
    pub(crate) fn system() -> Self {
        Self {
            workspace_root: None,
        }
    }

    pub(crate) fn in_workspace(workspace_root: &'a Path) -> Self {
        Self {
            workspace_root: Some(workspace_root),
        }
    }

    pub(crate) fn output(&self, args: &[&str], error_context: &str) -> Result<Output, String> {
        let mut command = crate::git_common::git_command();
        command.args(args);

        if let Some(workspace_root) = self.workspace_root {
            command.current_dir(workspace_root);
        }

        command
            .output()
            .map_err(|e| format!("{}: {}", error_context, e))
    }
}
