// src/components/common/AppButton.jsx
import { Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'

const AppButton = ({
  children,
  variant = 'contained',
  color = 'primary',
  icon = null,
  loading = false,
  disabled = false,
  sx = {},
  ...rest
}) => {
  const commonProps = {
    variant,
    color,
    startIcon: icon,
    disabled,
    sx: {
      px: 3,
      py: 1.5,
      fontWeight: 600,
      borderRadius: '10px',
      textTransform: 'none',
      ...sx, // allow override
    },
    ...rest,
  }

  if (loading) {
    return (
      <LoadingButton loading {...commonProps}>
        {children}
      </LoadingButton>
    )
  }

  return <Button {...commonProps}>{children}</Button>
}

export default AppButton
