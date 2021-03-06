/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ObserversModule} from '@angular/cdk/observers';
import {MatError} from './error';
import {MatFormField} from './form-field';
import {MatHint} from './hint';
import {MatLabel} from './label';
import {MatPlaceholder} from './placeholder';
import {MatPrefix} from './prefix';
import {MatSuffix} from './suffix';
import {MatFormFieldControl} from './form-field-control';


@NgModule({
  declarations: [
    MatError,
    MatFormField,
    MatHint,
    MatLabel,
    MatPlaceholder,
    MatPrefix,
    MatSuffix,

    // TODO(crisbeto): can be removed once `MatFormFieldControl`
    // is turned into a selector-less directive.
    MatFormFieldControl as any,
  ],
  imports: [
    CommonModule,
    ObserversModule,
  ],
  exports: [
    MatError,
    MatFormField,
    MatHint,
    MatLabel,
    MatPlaceholder,
    MatPrefix,
    MatSuffix,
  ],
})
export class MatFormFieldModule {}
