import { Box } from '@radix-ui/themes';

export const Skeleton = (): JSX.Element => {
  return (
    <Box className="shadow-blue-500/50 w-full overflow-hidden rounded-md shadow-[0_2px_5px] h-full">
      <div className="animate-pulse">
          <div className="bg-slate-500 min-h-full min-w-full h-72">
        </div>
      </div> 
    </Box>
  )
}
