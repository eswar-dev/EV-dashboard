import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '15px',
    borderRadius: '4px',
    border: '1px solid var(--Gray-500, #999)',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    marginLeft: '4px',
  },
}));

export { LightTooltip };
