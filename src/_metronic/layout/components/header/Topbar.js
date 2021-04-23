import objectPath from 'object-path';
import React, { useMemo } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import SVG from 'react-inlinesvg';

import { toAbsoluteUrl } from '../../../_helpers';
import { useHtmlClassService } from '../../_core/MetronicLayout';
import { LanguageSelectorDropdown } from '../extras/dropdowns/LanguageSelectorDropdown';
import { MyCartDropdown } from '../extras/dropdowns/MyCartDropdown';
import { QuickActionsDropdown } from '../extras/dropdowns/QuickActionsDropdown';
import { SearchDropdown } from '../extras/dropdowns/search/SearchDropdown';
import { UserNotificationsDropdown } from '../extras/dropdowns/UserNotificationsDropdown';
import { QuickUserToggler } from '../extras/QuiclUserToggler';

export function Topbar() {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      viewSearchDisplay: objectPath.get(
        uiService.config,
        "extras.search.display"
      ),
      viewNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ),
  
     
      viewUserDisplay: objectPath.get(uiService.config, "extras.user.display"),
    };
  }, [uiService]);

  return (
    <div className="topbar">
      {layoutProps.viewSearchDisplay && <SearchDropdown />}

      {layoutProps.viewNotificationsDisplay && <UserNotificationsDropdown />}



      {layoutProps.viewUserDisplay && <QuickUserToggler />}
    </div>
  );
}
